--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4 (Debian 12.4-1.pgdg100+1)
-- Dumped by pg_dump version 12.3 (Ubuntu 12.3-1.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: danam_glossimages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.danam_glossimages (
    id integer NOT NULL,
    altimage character varying(300) NOT NULL,
    tnimage character varying(300) NOT NULL,
    heidicon character varying(200) NOT NULL,
    imgmain boolean NOT NULL,
    uuid_id uuid NOT NULL
);


ALTER TABLE public.danam_glossimages OWNER TO postgres;

--
-- Name: danam_glossimages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.danam_glossimages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.danam_glossimages_id_seq OWNER TO postgres;

--
-- Name: danam_glossimages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.danam_glossimages_id_seq OWNED BY public.danam_glossimages.id;


--
-- Name: danam_glossimages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.danam_glossimages ALTER COLUMN id SET DEFAULT nextval('public.danam_glossimages_id_seq'::regclass);


--
-- Data for Name: danam_glossimages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.danam_glossimages (id, altimage, tnimage, heidicon, imgmain, uuid_id) FROM stdin;
\.


--
-- Name: danam_glossimages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.danam_glossimages_id_seq', 10, true);


--
-- Name: danam_glossimages danam_glossimages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.danam_glossimages
    ADD CONSTRAINT danam_glossimages_pkey PRIMARY KEY (id);


--
-- Name: danam_glossimages_uuid_id_f5491ff2; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX danam_glossimages_uuid_id_f5491ff2 ON public.danam_glossimages USING btree (uuid_id);


--
-- Name: danam_glossimages danam_glossimages_uuid_id_f5491ff2_fk_danam_terms_uuid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.danam_glossimages
    ADD CONSTRAINT danam_glossimages_uuid_id_f5491ff2_fk_danam_terms_uuid FOREIGN KEY (uuid_id) REFERENCES public.danam_terms(uuid) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

